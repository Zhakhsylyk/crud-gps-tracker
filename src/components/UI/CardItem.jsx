import { Box, Card, Stack,  Typography } from "@mui/material";
import React from "react";
import image from '../../assets/images/locomotive.png';

export const CardItem = () => {
  return (
    <Box className="w-96">
      <Box className="bg-cardColor h-52">
        <Typography variant="h5" className="text-white relative left-4 top-4">
          ID #141240
        </Typography>
        <img src={image} alt="locomotive" className="relative bottom-0.5"/>
      </Box>
      <Card className="h-screen">
      <Box className="flex flex-row pt-10 px-10 gap-5">
        <Stack spacing={5}>
        <Typography>Наименование:</Typography>
        <Typography>Серия:</Typography>
        <Typography>Количество секции:</Typography>
        <Typography>Широта:</Typography>
        <Typography>Долгота:</Typography>
        </Stack>
        <Stack spacing={5}>
        <Typography className="underline underline-offset-2">Алматы</Typography>
        <Typography className="underline underline-offset-2">5</Typography>
        <Typography className="underline underline-offset-2">200</Typography>
        <Typography className="underline underline-offset-2">Широта</Typography>
        <Typography className="underline underline-offset-2">Долгота</Typography>
        </Stack>
      </Box>
      </Card>
    </Box>
  );
};
