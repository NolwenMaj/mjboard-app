// components/profile/ProfileEditForm.tsx
import { User } from ".prisma/client";
import React, { useState } from "react";
import useToasterMessage from "../hooks/useToasterMessage";
import prisma from "../serverAction/prisma";

interface ProfileFormProps {
  user: User;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const placeholderName = user.name ? user.name : "";
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(placeholderName);
  const { setMessage } = useToasterMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await prisma.user.update({
        where: { id: user.id },
        data: { email, name },
      });
      setMessage("Profile modifié!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Il y a eu une erreur, profile non modifié");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Enregistrer les modifications</button>
    </form>
  );
};

export default ProfileForm;
