import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.scss";

import logoImg from "../../assets/logo.svg";

const NewIncident = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const ong = {
    id: localStorage.getItem("ong/id")
  };

  const handleNewIncident = async e => {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ong.id
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso. Tente novamente");
    }
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso"
          ></input>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          ></textarea>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais"
          ></input>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
