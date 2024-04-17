import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4">
        <Typography
          as="p"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium text-center"
        >
          Copyright © 2024 - All right reserved by ByteBlaze
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
