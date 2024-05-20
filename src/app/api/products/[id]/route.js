import { NextResponse } from "next/server";
import { conn } from "@/app/libs/mysql";

export async function GET(request, { params }) {
  console.log(params);

  try {
    const result = await conn.query("SELECT * FROM products WHERE ID = ?", [
      params.id,
    ]);

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    console.log(result);
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM products WHERE id = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    console.log(result);

    return new Response(null, { status: 204 });
  } catch (error) {
    return error;
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE products SET ? WHERE id = ?", [
      data,
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    const updatedProduct = await conn.query(
      "SELECT * FROM products WHERE id = ?",
      [params.id]
    );

    console.log(result);

    return NextResponse.json(updatedProduct);
  } catch (error) {

    return NextResponse.json(
        {
            message: error.message
        },
        {
            status: 500
        }
    )

  }


}
