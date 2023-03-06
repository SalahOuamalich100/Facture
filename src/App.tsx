/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";


function App() {
  const [showModal, setShowModal] = useState(false);


  function closeModal() : void {
    setShowModal(false);
  }

  function openModal() : void {
    setShowModal(true);
  }

  return (
    <div className="w-full flex justify-center  ">
      <div className="w-1/2 ">
        <h1 className="text-white text-2xl font-bold w-full text-center bg-black">
          F A C T U R E{" "}
        </h1>

        <div className="flex   mt-5">
          <div className="flex-col w-full">
            <h2 className="font-bold text-base w-fit underline">
              RSA DIESEL - SERVICE ROUTIER
            </h2>
            <h2 className="text-base w-fit">2-2551 Hogan H2K 2T5</h2>
            <h2 className="text-base">Tel:(438)-933-6562</h2>
            <h2 className="text-base">rsadiesel@gmail.com</h2>
          </div>
          <div className="w-1/2 ">
            <div className="flex-col  ">
              <div className="flex justify-end mb-8">
                <h2 className="text-base ">Numéro : </h2>
                <input
                  className=" w-16 border-1 border-black rounded-md text-base text-end"
                  type="text"
                />
              </div>
              <div className="flex justify-end ">
                <h2 className="text-base ">Date : </h2>
                <input
                  className=" w-24 border-1 border-black rounded-md text-base text-end"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex mt-5 w-full  ">
          <div className="flex flex-col w-1/2   ">
            <h2 className="text-base font-bold w-fit"> Vendu à : </h2>
            <input
              className=" w-44  border-1 border-black rounded-md text-base"
              type="text"
              placeholder=""
            />
            <input
              className="w-44 border-1 border-black rounded-md text-base"
              type="text"
              placeholder=""
            />
            <input
              className="w-44 border-1 border-black rounded-md text-base"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex  w-1/2    ">
            <div className="flex-col  w-full  ">
              <div className="flex justify-end">
                <h2 className="text-base font-bold w-fit ">
                  {" "}
                  Appelle de service à :{" "}
                </h2>
              </div>
              <div className="flex justify-end ">
                <input
                  className="w-44 border-1 border-black rounded-md text-base text-end"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex justify-end ">
                <input
                  className="w-44 border-1 border-black rounded-md text-base text-end"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex justify-end ">
                <input
                  className="w-44 border-1 border-black rounded-md text-base text-end"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center mt-8 ">
            <table className="inventory">
              <thead>
                <tr>
                  <th>
                    <span>Article</span>
                  </th>
                  <th colSpan={2}>
                    <span>Description</span>
                  </th>
                  <th className=" w-28">
                    <span>Quantité/Heure</span>
                  </th>
                  <th className=" w-16">
                    <span>Prix Unit</span>
                  </th>
                  <th className=" w-16">
                    <span>Montant</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* truc qui se repete */}
                <div className="relative ">
                  <div className="absolute top-0 cursor-pointer mt-2  left-[-30px] bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
                    <p className=" p-0 m-0  text-white mb-1 text-lg rounded-full mb">
                      -
                    </p>
                  </div>
                  <div className="absolute top-0 cursor-pointer mt-2  left-[-60px] w-5 h-5 rounded-full flex items-center justify-center">
                    <p className=" p-0 m-0  text-white mb-1 text-sm rounded-full mb" onClick={openModal}  >
                      ✏️
                    </p>
                  </div>
                </div>
                <tr>
                  <td>
                    <span>Boite adidas</span>
                  </td>
                  <td colSpan={2}>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span data-prefix>$</span>
                    <span>100</span>
                  </td>
                  <td>
                    <span data-prefix>$</span>
                    <span>100</span>
                  </td>
                </tr>

                {/* fin */}
              </tbody>
              <div className="bg-blue-500 w-5 h-5 rounded-full mt-1 cursor-pointer flex items-center justify-center">
                <p className=" p-0 m-0 text-white mb-1 text-lg rounded-full mb" onClick={openModal}>
                  +
                </p>
              </div>
            </table>
          </div>
        </div>

        {/* tableau de droite */}
        <div className="w-full flex justify-end items-end ">
          <div className=" w-64 ">
            <div className=" ">
              <table className="balance">
                <tr>
                  <th>
                    <span>Montant hors taxes</span>
                  </th>
                  <td>
                    <span data-prefix>$</span>
                    <span id="TotalSansTaxe">0.00</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>TPS(5%)</span>
                  </th>
                  <td>
                    <span data-prefix>$</span>
                    <span id="TPS">0.00</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>TVQ(9.975%)</span>
                  </th>
                  <td>
                    <span data-prefix>$</span>
                    <span id="TVQ">0.00</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>Montant avec taxes</span>
                  </th>
                  <td>
                    <span data-prefix>$</span>
                    <span id="TotalAvecTaxe">0.00</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {/* fin tableau de droite */}

        <div className="flex justify-center text-center flex-col mt-7">
          <p className="text-lg "> R E M A R Q U E S </p>
          <div className="bg-black w-full h-[0.2px]"></div>
        </div>
        <div className="mt-3">
          <p className="">PAYABLE À L'ORDRE DE RSA DIESEL SERVICE ROUTIER</p>
          <br></br>
          <p>Numero de TPS/TVH: #751509407RT0001</p>
          <p>Numero de TVQ: #4010903144TQ0001</p>
        </div>

        {/*modal */}

        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" >
          <div className="w-1/2 h-1/2 flex flex-col bg-white">
            <button className="bg-red-500 w-10 h-10 rounded-full text-white place-self-end m-2" onClick={closeModal}  >
              X
            </button>
            <h2 className="text-2xl text-center">Ajouter un article ou modifier</h2>
            <div className="flex justify-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="article">Article</label>
                <input
                  className="border  border-black rounded-md text-base"
                  type="text"
                  placeholder="nom de l'article"
                />

                <label htmlFor="description">Description</label>
                <input
                  className="border border-black rounded-md text-base"
                  type="text"
                  placeholder="description de l'article"
                />

                <label htmlFor="quantite">Quantité/Heure</label>
                <input
                  className="border border-black rounded-md text-base"
                  type="text"
                  placeholder=" Quantité/Heure"
                />

                <label htmlFor="prix">Prix Unit</label>
                <input
                  className="border border-black rounded-md text-base"
                  type="text"
                  placeholder="Prix Unit"
                />
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-500 w-20 h-10 rounded-md text-white">
                    Ajouter
                  </button>
                  <button className="bg-red-500 w-20 h-10 rounded-md text-white ml-4">
                    Modifier
                  </button>
                  </div>

              </div>
            </div>
          </div>
        </div>
        )}
        {/* fin modal */}
      </div>
    </div>
  );
}

export default App;
