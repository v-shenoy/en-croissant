import { Divider, Paper, Stack } from "@mantine/core";
import { NormalizedGame } from "../../utils/db";
import GameInfo from "../common/GameInfo";
import GamePreview from "./GamePreview";

function GameCard({ game }: { game: NormalizedGame }) {
  return (
    <Paper shadow="sm" p="sm" withBorder>
      <Stack>
        <GameInfo
          dateString={game.date}
          whiteName={game.white.name}
          blackName={game.black.name}
          white_elo={game.white_elo}
          black_elo={game.black_elo}
          result={game.result}
        />
        <Divider mb="sm" />
        <GamePreview pgn={game.moves} />
      </Stack>
    </Paper>
  );
}

export default GameCard;
