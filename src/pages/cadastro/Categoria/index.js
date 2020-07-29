import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Cadastrar categoria</h1>

        <Link to='/'>
          Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;