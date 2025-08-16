"use server";

import { z } from "zod";
import { verifySession } from "./session";
import prisma from "@/lib/prisma";

enum TaskStatus {
  TODO = "TODO",
  DONE = "DONE",
  OVERDUE = "OVERDUE",
}

const TaskCreationForm = z.object({
  title: z.string().min(1),
  status: z.nativeEnum(TaskStatus),
  due_Date: z.date(),
});

export async function addTasks(state: any, formData: any) {
  const validationResult = TaskCreationForm.safeParse({
    title: formData.get("title"),
    status: formData.get("status"),
    due_Date: new Date(formData.get("due_Date"))
  })
  console.log(formData)

  if (!validationResult.success) {
    console.log("failed to create task");
    return {
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  const user = await verifySession();
  if (!user) {
    return { error: { auth: "Unauthorized" } };
  }

  const task = await prisma.task.create({
    data: {
      title: validationResult.data.title,
      status: validationResult.data.status,
      due_Date: validationResult.data.due_Date,
      userId: Number(user.userId),
    },
  });
  return { success: true, task };
}

export async function deleteTask(id: number){
  const user = await verifySession();
  if(!user){
    return { error: { auth: "Unauthorized"}}
  }
  try {
    const task = await prisma.task.delete({
      where: { id },
    });
    console.log("Deleted successfully:", task);
    return { success: true };
  } catch (error) {
    console.error("Error deleting task:", error);
    return { success: false, error };
  }
}

export async function getTasks(){
  const user = await verifySession();
  if (!user) {
    console.error("Unauthorized");
    return null;
  }

  const tasks = prisma.task.findMany({
    where: { userId: Number(user.userId)}
  })

  return tasks
}