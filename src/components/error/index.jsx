import React from "react";

const Error = ({ info, retry }) => {
  return (
    <div className="bg-red-100 mt-20 p-10 text-center text-lg rounded-md">
      <div>
        <p>Üzgünüz İşlem Sırasında Bir Hata Meydana Geldi ...</p>
        <p className="font-semibold">{info} </p>
      </div>
      <div className="flex justify-center my-10">
        <button
          className="border py-2 px-4 rounded-md hover:bg-red-300 transition cursor-pointer "
          onClick={retry}
        >
          Tekrar dene
        </button>
      </div>
    </div>
  );
};

export default Error;
