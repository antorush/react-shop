import Container from "../../utility/Container";
import signUpImg from "../../../images/contact/contactImg.png";
import Form from "../../utility/Form/Form";
interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <section className="block pt-[60px] pb-[140px]">
      <Container>
        <div className="flex justify-between items-center">
          <img src={signUpImg} alt="" className="block pr-7" />
          <Form isLogin={false} />
        </div>
        <div></div>
      </Container>
    </section>
  );
};

export default SignUp;
