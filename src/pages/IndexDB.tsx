import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { openDB } from "idb";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  telp: string;
}

export default function IndexDB() {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<FormData>();
  const watchFields = watch();

  const DB_NAME = "Index_DB";
  const STORE_NAME = "IndexDB";

  const initDB = async () => {
    return openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
      },
    });
  };

  const saveFormData = async (data: FieldValues) => {
    const db = await initDB();
    await db.put(STORE_NAME, { id: 1, ...data });
  };

  const loadFormData = async () => {
    const db = await initDB();
    const data = await db.get(STORE_NAME, 1);
    if (data) {
      Object.keys(data).forEach((key) => {
        if (key !== "id") {
          setValue(key as keyof FormData, data[key as keyof FormData]);
        }
      });
    }
  };

  const clearFormData = async () => {
    const db = await initDB();
    await db.delete(STORE_NAME, 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast({
      title: "Form Submitted",
      description: `Data: ${JSON.stringify(data)}`,
    });
    reset();
    clearFormData();
  };

  useEffect(() => {
    loadFormData();
  }, []);

  useEffect(() => {
    saveFormData(watchFields);
  }, [watchFields]);

  return (
    <div className="flex flex-grow justify-center items-center">
      <Card className="max-w-md mx-auto p-12 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-12">Form with IndexedDB</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Name</Label>
            <Input type="name" placeholder="Name" {...register("name")} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" {...register("email")} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Telp</Label>
            <Input type="number" placeholder="Telp" {...register("telp")} />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
