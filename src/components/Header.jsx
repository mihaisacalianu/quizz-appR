import Image from "./Image";
import quizLogo from "../assets/quiz-logo.png"
export default function Header() {
  return(
    <>
      <header>
        <Image
        srcImg={quizLogo}
        altImg={"quiz logo image"}
        />
        <h1>REACTQUIZ</h1>
      </header>
    </>
  );
}
