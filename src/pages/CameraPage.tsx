import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [streaming, setStreaming] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const width = 320;
  const [height, setHeight] = useState(0);

  const handleCanPlay = () => {
    if (!streaming && videoRef.current) {
      const video = videoRef.current;
      const computedHeight = video.videoHeight / (video.videoWidth / width);
      const finalHeight = isNaN(computedHeight)
        ? width / (4 / 3)
        : computedHeight;

      setHeight(finalHeight);

      video.setAttribute("width", width.toString());
      video.setAttribute("height", finalHeight.toString());
      canvasRef.current!.setAttribute("width", width.toString());
      canvasRef.current!.setAttribute("height", finalHeight.toString());

      setStreaming(true);
    }
  };

  const clearPhoto = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d")!;
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };

  const takePicture = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d")!;

      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL("image/png");
        setPhoto(data);
      } else {
        clearPhoto();
      }
    }
  };

  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser does not support camera access.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing camera: ", error);
      alert("Unable to access the camera. Please check your browser settings.");
    }
  };

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleStartCamera = async () => {
    setCameraActive(true);
    await startCamera();
  };

  return (
    <div className="flex flex-grow justify-center items-center">
      <Card className="max-w-lg mx-auto p-4">
        <CardContent className="p-16">
          <div className="flex flex-col items-center space-y-4">
            {!cameraActive ? (
              <Button onClick={handleStartCamera}>Start Camera</Button>
            ) : (
              <div className="camera">
                <video
                  ref={videoRef}
                  onCanPlay={handleCanPlay}
                  className={`rounded-md ${streaming ? "block" : "hidden"}`}
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>
            )}
            <Button onClick={takePicture}>Take Picture</Button>
            <Button variant="secondary" onClick={clearPhoto}>
              Clear
            </Button>
            {photo && (
              <img
                src={photo}
                alt="Captured"
                className="mt-4 border border-gray-300 rounded-md"
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
