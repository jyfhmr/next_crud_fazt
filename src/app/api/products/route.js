import {NextResponse} from "next/server"

export function GET(){
    return NextResponse.json("Listando Productos")
}

export function POST(){
    return NextResponse.json("creando productos")
}