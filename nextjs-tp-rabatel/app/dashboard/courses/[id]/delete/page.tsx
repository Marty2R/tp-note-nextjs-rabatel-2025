"use client";

import { deleteCourse } from "@/app/lib/action";
import router, { redirect, usePathname } from "next/navigation";

const DeleteCoursePage = () => {
  const pathname = usePathname();

  const id = pathname.split("/")[3];
  console.log(pathname);
  const handleDelete = async () => {
    if (!id) {
      console.error("ID du cours manquant");
      return; // Assurez-vous que l'ID est présent avant de continuer
    }

    const response = await deleteCourse(id);

    console.log(response);

    if (response.success) {
      // Rediriger ou mettre à jour l'interface utilisateur après la suppression
      redirect("/dashboard/courses");
    } else {
      // Gérer l'erreur
      console.error("Erreur lors de la suppression du cours");
    }
  };

  return (
    <div>
      <h1>Supprimer le cours</h1>
      <button onClick={handleDelete}>Confirmer la suppression</button>
    </div>
  );
};

export default DeleteCoursePage;
