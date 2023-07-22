import { Box, Paper, Stack, styled } from "@mui/material";

export const HorizontalSection = styled(Paper)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const MonederoPanel = styled(Paper)(() => ({
  maxWidth: "1350px",
  padding: "32px",
}));
function MonederoLayout({
  slot1,
  slot2,
  slot3,
  slot4,
  slot5,
  slot6,
  slot7,
}: any) {
  return (
    <>
      <MonederoPanel elevation={3}>
        <Stack spacing={3}>
          <HorizontalSection elevation={0}>
            <Box sx={{ display: "flex" }}>
              {/* Top left movements */}
              {slot1}
            </Box>
            <Box
              sx={{
                flex: 1,
                textAlign: "right",
                paddingRight: "30px",
                paddingTop: "10px",
                color: "#0090ff",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* Top middle current balance */}
              {slot2}
            </Box>
            <Box>
              {/* top right operations buttons  */}
              {slot3}
            </Box>
          </HorizontalSection>
          <HorizontalSection
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
            elevation={0}
          >
            <Stack direction={"row"} spacing={1}>
              {/* search filter and columns*/}
              {slot4}
              {slot5}
              {slot6}
            </Stack>
          </HorizontalSection>
          <HorizontalSection elevation={0}>
            {/* table */}
            {slot7}
          </HorizontalSection>
        </Stack>
      </MonederoPanel>
    </>
  );
}

export default MonederoLayout;
