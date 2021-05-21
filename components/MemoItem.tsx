import { Grid, ListItem } from "@material-ui/core";
import React from "react";

interface MemoItemProps{
  memoData: MemoData
}

export type MemoData = {
  content :string
}

export const MemoItem = (props:MemoItemProps) => {
  const {memoData} = props;
  return <Grid>
    <ListItem>
      {memoData.content}
    </ListItem>
  </Grid>
}