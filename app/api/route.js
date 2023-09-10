import { NextResponse } from "next/server";
import validator from "validator";

export async function GET() {
  return NextResponse.json({
    books: [
      {
        id: "1",
        title: "Name: You Were Born To Be You",
        body: "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
        gender: "female",
        age: "young",
        author: "Mancy Chennings",
      },
      {
        id: "2",
        title: "Name And Name In The Land Of Happiness",
        body: "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
        gender: "female",
        age: "medium",
        author: "Henry Wrangler",
      },
      {
        id: "3",
        title: "Name: Trip To The Jungle",
        body: "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
        gender: "male",
        age: "mature",
        author: "Annette Marie-Thomaszch",
      },
      {
        id: "4",
        title: "Name: Trip To The Mountain",
        body: "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
        gender: "male",
        age: "young",
        author: "Larry Smith",
      },
    ],
  });
}

export async function POST(request, response) {
  try {
    const body = await request.json();
    console.log(body);

    if (!validator.isLength(body.name, { min: 2 })) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long" },
        { status: 400 }
      );
    }

    if (!validator.isAlpha(body.name.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Name must contain only letters" },
        { status: 400 }
      );
    }

    if (/\d/.test(body.name)) {
      return NextResponse.json(
        { error: "Name must not contain numbers" },
        { status: 400 }
      );
    }

    if (/[()&/\\,.]/.test(body.name)) {
      return NextResponse.json(
        {
          error: "Name must not contain special characters like ()[]&/\\,.",
        },
        { status: 400 }
      );
    }

    if (/\band\b/i.test(body.name)) {
      return NextResponse.json(
        { error: 'Name must not contain the word "and"' },
        { status: 400 }
      );
    }

    if (!["male", "female"].includes(body.gender)) {
      return NextResponse.json(
        { error: 'Gender must be either "male" or "female"' },
        { status: 400 }
      );
    }

    // sending data to a server
    await fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // here I return a success message after successful validation
    return NextResponse.json({ message: "Validation successful" });
  } catch (error) {
    // handling unexpected errors
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
