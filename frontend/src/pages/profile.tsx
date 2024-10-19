import React, { useState } from "react";
import "../styles/pages/Profile.scss";
import ProfileImageLoader from "../components/Others/ProfileImageLoader";
import BuildCard from "../components/Others/BuildCard";
import Modal from "react-modal";
import DeleteBuildModal from "../components/Others/DeleteBuildModal";
import UpdatePasswordModal from "../components/Others/UpdatePasswordModal";
import DeleteAccountModal from "../components/Others/DeleteAccountModal";

const defaultBuilds = [
  {
    id: 1,
    name: "Build Iop",
    url: "/src/assets/class/iop.webp",
  },
  {
    id: 2,
    name: "Build Huppermage",
    url: "/src/assets/class/huppermage.webp",
  },
  {
    id: 3,
    name: "Build Sadida",
    url: "/src/assets/class/sadida.webp",
  },
];

const userMock = {
  email: "matthiagoup@gmail.com",
  password: "test",
  userProfile: "/src/assets/class/iop.webp",
};

function profile() {
  const [builds, setBuilds] = useState(defaultBuilds);
  const [user, setUser] = useState(userMock);
  const [buildToDelete, setBuildToDelete] = useState<number | null>(null);
  const [openUpdatePassword, setOpenUpdatePassword] = useState(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);

  function handleDeleteBuild(id: number) {
    setBuildToDelete(id);
  }

  function handleClickBuild(id: number) {}

  function toggleConfirmModal() {
    setBuildToDelete(null);
  }

  function deleteBuild() {
    // fetch api
    setBuilds((curr) => curr.filter(({ id }) => id != buildToDelete));
    setBuildToDelete(null);
  }

  function updatePassword(currentPassword: string, newPassword: string) {
    // fetch api
    setOpenUpdatePassword(false);
  }

  function deleteAccount(currentPassword: string) {
    // fetch api
    setOpenDeleteAccount(false);
  }

  return (
    <div className="profilePage">
      <div className="profile">
        <img src={user.userProfile} />
        <p>{user.email}</p>
        <div className="profile-actions-buttons">
          <button
            className="update-profile-button"
            onClick={() => setOpenUpdatePassword(true)}
          >
            Modifier le mot de passe
          </button>
          <button
            className="delete-profile-button"
            onClick={() => setOpenDeleteAccount(true)}
          >
            Supprimer le compte
          </button>
        </div>
      </div>
      <div className="build-list">
        <h2>Liste des builds</h2>
        <div className="build-list-content">
          {builds.map(({ name, id, url }) => (
            <BuildCard
              key={id}
              name={name}
              imagePath={url}
              onDelete={() => handleDeleteBuild(id)}
              onClick={() => handleClickBuild(id)}
            />
          ))}
          {builds.length === 0 && (
            <p className="empty-list-message">
              Aucune configuration enregistrée
            </p>
          )}
        </div>
      </div>
      <DeleteBuildModal
        build={builds.find(({ id }) => id === buildToDelete)}
        onClose={toggleConfirmModal}
        onDelete={deleteBuild}
      />

      <UpdatePasswordModal
        open={openUpdatePassword}
        onClose={() => {
          setOpenUpdatePassword(false);
        }}
        onUpdate={updatePassword}
      />

      <DeleteAccountModal
        open={openDeleteAccount}
        onClose={() => {
          setOpenDeleteAccount(false);
        }}
        onDelete={deleteAccount}
      />
    </div>
  );
}

export default profile;
