import connectDB from "@/libs/connectDB";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
import url from "url";

connectDB();

export async function GET(req) {
  try {
    const todo = await Todo.find();
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "fail to get all create todo" },
      { status: 500 }
    );
  }
}
