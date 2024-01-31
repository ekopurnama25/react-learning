import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CoffeContext from "../../../context/CoffeContext";

const EditCoffeAdmin = () => {
  useDocumentTitle("Update Coffe");

  const { GetIdCoffeData, getcoffe } = useContext(CoffeContext);
  const { id } = useParams();

  useEffect(() => {
    GetIdCoffeData(id);
  }, []);

  const updateForm = useFormik({
    initialValues: {
      JenisCoffe: "",
      HargaCoffe: "",
      DescriptionCoffe: "",
    },
    validationSchema: Yup.object({
      JenisCoffe: Yup.string().required("name goods is required"),
      HargaCoffe: Yup.string().required("price goods is required"),
      DescriptionCoffe: Yup.string().required("wight goods is required"),
    }),
    onSubmit: (values) => {
      // updateProduct(values)
      console.log(values);
    },
  });
  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto rounded mt-6">
          <section className="w-full h-auto  rounded-xl">
            <h1 className="pb-6 font-bold text-gray-400">Tambah Menu Coffe</h1>
          </section>
          <section className="w-full h-auto  rounded-xl bg-gray-200">
            <form onSubmit={updateForm.handleSubmit}>
              <div className="m-4 p-6">
                <div className="pb-4">
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="JenisCoffe"
                    type="text"
                    name="Id"
                    placeholder="Nama Coffe ..."
                    onChange={updateForm.handleChange}
                    values={getcoffe?.id}
                  />
                  <p className="pb-2">Name Coffe</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="JenisCoffe"
                    type="text"
                    name="JenisCoffe"
                    placeholder="Nama Coffe ..."
                    onChange={updateForm.handleChange}
                    value={getcoffe?.JenisCoffe}
                  />
                  {updateForm.errors.JenisCoffe && (
                    <p>{updateForm.errors.JenisCoffe}</p>
                  )}
                </div>
                <div className="pb-4">
                  <p className="pb-2">Harga Coffe</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="HargaCoffe"
                    type="number"
                    name="HargaCoffe"
                    onChange={updateForm.handleChange}
                    value={getcoffe?.HargaCoffe}
                    placeholder="Harga Coffe ..."
                  />
                  {updateForm.errors.HargaCoffe && (
                    <p>{updateForm.errors.HargaCoffe}</p>
                  )}
                </div>
                <div className="pb-4">
                  <p className="pb-2">Upload Image</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                    name="image"
                    multiple
                    accept="image/*"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "ImagesCoffe",
                        event.target.files[0]
                      );
                    }}
                    placeholder="Harga Coffe ..."
                  />
                  {/* {formik.errors.image && <p>{formik.errors.image}</p>} */}
                </div>
                <div className="pb-4">
                  <p className="pb-2">Deskripsi</p>
                  <textarea
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="DescriptionCoffe"
                    name="DescriptionCoffe"
                    onChange={updateForm.handleChange}
                    value={getcoffe?.DescriptionCoffe}
                    placeholder="Harga Coffe ..."
                  />
                  {updateForm.errors.DescriptionCoffe && (
                    <p>{updateForm.errors.DescriptionCoffe}</p>
                  )}
                </div>
                <div className="pb-4">
                  <button
                    type="submit"
                    className="bg-[#0ea5e9] w-32 h-8 text-white font-bold rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default EditCoffeAdmin;
