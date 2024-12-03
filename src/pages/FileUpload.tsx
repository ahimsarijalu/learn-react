import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { baseUrl } from "@/config";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2, Upload } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FileUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    const fData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "file") {
        fData.append(key, data[key][0]);
      } else {
        fData.append(key, data[key]);
      }
    });

    axios
      .post(`${baseUrl}/upload`, fData)
      .then((response) => {
        const rData = response.data;
        toast({
          title: rData,
          description: `File name: ${data.file[0].name}`,
        });
        reset();
      })
      .catch((error) => {
        toast({
          title: error,
          description: `File name: ${data.file[0].name}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const downloadFile = (ext: string) => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/export`)
      .then((response) => {
        window.open(`${baseUrl}/files/export.${ext}`, "_blank")?.focus();
        toast({
          title: response.data,
          description: `File name: data`,
        });
      })
      .catch((err) => {
        toast({
          title: err,
          description: `File name: data`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-grow justify-center items-start mt-4">
      <Tabs
        defaultValue="upload"
        className="w-[400px] flex flex-grow flex-col justify-center items-center content-center"
      >
        <TabsList>
          <TabsTrigger value="upload">Account</TabsTrigger>
          <TabsTrigger value="download">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <Card className="max-w-md mx-auto p-12 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-12">Form with IndexedDB</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">File</Label>
                <Input
                  id="picture"
                  type="file"
                  className="w-full px-3 py-2 rounded-md text-center"
                  {...register("file", {
                    required: "File harus dipilih",
                  })}
                />
                {errors.file && <p className="">{errors.file.message}</p>}
              </div>
              {isLoading ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full py-2">
                  <Upload className="me-2" />
                  Upload File
                </Button>
              )}
            </form>
          </Card>
        </TabsContent>
        <TabsContent
          value="download"
          className="flex flex-col flex-grow justify-center items-center gap-4"
        >
          {isLoading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
          ) : (
            <div className="flex flex-grow flex-row gap-4 justify-center items-center">
              <Button onClick={() => downloadFile("xlsx")}>
                Download Excel
              </Button>
              <Button onClick={() => downloadFile("txt")}>Download txt</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
