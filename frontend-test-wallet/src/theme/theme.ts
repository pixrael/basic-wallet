import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    action: true;
    second: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0090ff",
    },
    secondary: {
      main: "#f3f6f9",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: "44px",
        },
      },
      variants: [
        {
          props: { variant: "action" },
          style: {
            backgroundColor: "#ffce33",
            color: "#464e5f",
          },
        },
        {
          props: { variant: "second" },
          style: {
            backgroundColor: "#f3f6f9",
            color: "#0090ff",
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "44px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: "none",
          ".MuiTableHead-root .MuiTableCell-root, .MuiTableHead-root .MuiButtonBase-root, .MuiTableHead-root .MuiButtonBase-root .MuiSvgIcon-root":
            {
              color: "#bebeca",
              textTransform: "uppercase",
            },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#0090ff",
            color: "white",
          },
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root, .MuiTablePagination-selectLabel": {
            display: "none",
          },
          ".MuiInputBase-root ": {
            backgroundColor: "#f3f6f9",
            width: "85px",
            marginRight: "20px",
            paddingRight: "14px",
            color: "#464e5f",
            borderRadius: "5px",
          },
          ".MuiSelect-icon": {
            right: "7px",
            color: "#464e5f",
          },
        },
      },
    },
  },
});

export default theme;
