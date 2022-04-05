const IconContent = ({ content }) => {
  if (
    content === "image/png" ||
    content === "image/jpeg" ||
    content === "image/jpg"
  ) {
    return (
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd" transform="translate(3 3)">
          <g stroke="#000" strokeLinecap="round" strokeLinejoin="round">
            <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
            <path d="m14.5 10.5-3-3-3 2.985" />
            <path d="m12.5 14.5-9-9-3 3" />
          </g>
          <circle cx="11" cy="4" fill="currentColor" r="1" />
        </g>
      </svg>
    );
  }
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 3)"
      >
        <path d="m12.5 12.5v-7l-5-5h-5c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z" />
        <path d="m2.5 7.5h5" />
        <path d="m2.5 9.5h7" />
        <path d="m2.5 11.5h3" />
        <path d="m7.5.5v3c0 1.1045695.8954305 2 2 2h3" />
      </g>
    </svg>
  );
};

export default IconContent;
