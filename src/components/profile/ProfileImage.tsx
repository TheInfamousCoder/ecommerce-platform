import Goku from "../../assets/images/goku-ssj2.webp";
const ProfileImage = () => {
  return (
    <>
      <div className="w-24 h-24 rounded-full border-2 border-purple-500 object-cover overflow-hidden absolute top-[-70px] left-1/2 -translate-x-1/2">
        <img
          src={Goku}
          alt="Goku Super Saiyan 2"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default ProfileImage;
