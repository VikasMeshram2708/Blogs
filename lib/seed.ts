import prisma from "./prisma";

async function seed() {
  try {
    const data = {
      name: "test",
      email: "test@gmail.com",
      message: "this is testing of contact page.",
    };

    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  } catch (error) {
    console.error(error);

    throw error;
  }
}

seed()
  .then(() => console.log("Db seeded successfully"))
  .catch((err) =>
    console.log(`Something went wrong. Failed to seed the DB. "${err}}`)
  );
