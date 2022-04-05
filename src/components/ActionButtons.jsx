import { IconButton } from "@chakra-ui/react";

export const UploadFileButton = ({ ...props }) => {
  return (
    <IconButton
      aria-label="Add file"
      bgColor="gray.200"
      color="black"
      variant="solid"
      _hover={{ bg: "#CBD5E0" }}
      {...props}
    >
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(4 3)"
        >
          <path d="m8.5 14.5h2c1.1045695 0 2-.8954305 2-2v-8l-4-4h-6c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h2" />
          <path d="m3.5 7.5 3-3 3 3" />
          <path d="m6.5 4.5v11" />
        </g>
      </svg>
    </IconButton>
  );
};

export const CreateFolderButton = ({ ...props }) => {
  return (
    <IconButton
      aria-label="Add folder"
      bgColor="gray.200"
      color="black"
      variant="solid"
      _hover={{ bg: "#CBD5E0" }}
      {...props}
    >
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 4)"
        >
          <path d="m.5 1.5v9c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-6.00280762c.000802-1.1045695-.8946285-2-1.999198-2-.0002674 0-.0005348.00000006-.0008018.00080218l-5.0000002.00200544-2-2h-4c-.55228475 0-1 .44771525-1 1z" />
          <path d="m5.5 7.5h4" />
          <path d="m7.5 9.556v-4.056" />
        </g>
      </svg>
    </IconButton>
  );
};

export const DownloadFileButton = ({ ...props }) => {
  return (
    <IconButton aria-label="Download file" variant="solid" {...props}>
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(4 3)"
        >
          <path d="m2.5 7.5 4 4.232 4-4.191" />
          <path d="m6.5.5v11" />
          <path d="m.5 14.5h12" />
        </g>
      </svg>
    </IconButton>
  );
};

export const ShareFileButton = ({ ...props }) => {
  return (
    <IconButton aria-label="Share file" variant="solid" {...props}>
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)"
        >
          <path d="m15.5.5v5h-5" transform="matrix(1 0 0 -1 0 6)" />
          <path
            d="m12-.95v9.9"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 6.343146 -7.313708)"
          />
          <path d="m7.5.5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-4" />
        </g>
      </svg>
    </IconButton>
  );
};
