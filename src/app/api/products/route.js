import { NextResponse } from "next/server";

import { conn } from "@/app/libs/mysql";

export async function GET() {

  try {
    const result = await conn.query("SELECT * FROM products");

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
        message: error
    },{
        status: 500
    })
  }

}

export async function POST(request) {
  try {
    const { name, description, price } = await request.json();
    console.log("la data", name, description, price);

    const result = await conn.query("INSERT INTO products SET ?", {
      name: name,
      description: description,
      price: price,
    });

    console.log(result);

    return NextResponse.json({
      name: name,
      description: description,
      price: price,
      id: result.insertId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
}
