import "../styles/footer.scss";
import { RiGithubLine, RiFacebookCircleLine, RiLinkedinBoxLine, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container flex bw">
      <img src="/logo.png" alt="" />
      <div className="footer-text flex col">
        <p>
          Bookio is an online book store where you can purchase and sell your
          own books at ease. whereas we provide a good platform to book
          enthusiasts with best user experience and user design which also
          attracts readers.
        </p>
        <div className="links-icons flex">
            <div className="icon flex"><RiGithubLine /></div>
            <div className="icon flex"><RiFacebookCircleLine /></div>
            <div className="icon flex"><RiLinkedinBoxLine /></div>
            <div className="icon flex"><RiWhatsappLine /></div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
