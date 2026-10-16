"use client";
import { Button } from "@/components/ui/button";

interface Student {
  name: string;
  course: string;
}

const student: Student = {
  name: "Nivedita",
  course: "Next.js and TypeScript",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold text-blue-400">
        Hello World!
      </h1>

      <p>My first Next.js project.</p>

      <div className="rounded-lg bg-zinc-800 p-6 text-center">
        <h2 className="text-2xl font-semibold">
          Student Details
        </h2>

        <p className="mt-3">Name: {student.name}</p>
        <p>Course: {student.course}</p>
      </div>

      <Button
  onClick={() => alert("Hello! Welcome to Next.js!")}
  variant="default"
  size="lg"
  className="rounded-full px-8"
>
  Click Me
</Button>
    </main>
  );
}