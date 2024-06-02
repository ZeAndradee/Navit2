import axios from "axios";
import fetchUserProfile from "./FetchUserProfile";

const handlePartidas = async (
  player1,
  player2,
  sets,
  matchTime,
  matchPlace,
  p1set0,
  p2set0,
  p1set1,
  p2set1,
  p1set2,
  p2set2,
  p1set3,
  p2set3,
  p1set4,
  p2set4,
  p1set5,
  p2set5,
  content
) => {
  console.log("epa");
  const likes = 0;
  const comments = 0;
  const BASE_URL = "https://tennisly-api-1.onrender.com/matches";
  try {
    const resPlayer1 = await fetchUserProfile(player1);
    const resPlayer2 = await fetchUserProfile(player2);

    if (resPlayer1 && resPlayer2) {
      const player1Id = resPlayer1?.id;
      const player2Id = resPlayer2?.id;
      const date = Date.now();
      const timestamp = new Date(date);

      try {
        axios.post(BASE_URL, {
          timestamp,
          idplayer1: player1Id,
          idplayer2: player2Id,
          sets,
          matchtime: matchTime,
          matchplace: matchPlace,
          fscorep1: p1set0,
          fscorep2: p2set0,
          set1p1: p1set1,
          set1p2: p2set1,
          set2p1: p1set2,
          set2p2: p2set2,
          set3p1: p1set3,
          set3p2: p2set3,
          set4p1: p1set4,
          set4p2: p2set4,
          set5p1: p1set5,
          set5p2: p2set5,
          content,
          likes,
          comments,
        });
        return { result: true, response: "Partida criada com sucesso." };
      } catch (error) {
        return { result: false, response: `${error}` };
      }
    } else {
      throw new Error(`O adversário informado não foi encontrado.`);
    }
  } catch (error) {
    return { result: false, response: `${error}` };
  }
};

export default handlePartidas;
