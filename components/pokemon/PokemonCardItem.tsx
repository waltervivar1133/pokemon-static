import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props { 
  pokemon : SmallPokemon;
}

export const PokemonCardItem:FC<Props> = ({pokemon}) => {
  
  const {id,img,name} = pokemon;
  
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}> 
        <Card hoverable clickable>
          <Card.Body css={{ p: 1}}>
            <Card.Image
              src={img}
              width="100"
              height={140}
            />
            <Card.Footer>
              <Row justify="space-between">
                  <Text ># {id}</Text>
                  <Text transform="capitalize"> { name}</Text>
              </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Grid>
  )
}
