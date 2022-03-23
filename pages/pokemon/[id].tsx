

import { useRouter } from 'next/router';
import React from 'react'


 const PokemonPage = () => {

  const router = useRouter();
  const { id } = router.query;
  console.log(id);
   
  return (

    <div>PokemonPage</div>
  )
}

export default PokemonPage;