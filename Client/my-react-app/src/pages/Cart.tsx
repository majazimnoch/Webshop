/* import { Button } from "react-bootstrap";
import { Link, LinkProps } from "react-router-dom";
 */
/* interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: string; // You can specify other button props as needed
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, ...props }, ref) => (
    <Button as="a" ref={ref} {...props}>
      {children}
    </Button>
  )
);

const Cart = () => {
  return (
    <div>
      Cart
      <LinkButton to="/" variant="primary">
        Primary
      </LinkButton>
    </div>
  );
}; */
const Cart = () => {
  return (
    <div>
      Cart
      {/*   <Button as={Link} to="/" variant="primary">
                Go back to shop!
            </Button> */}
    </div>
  );
};

export default Cart;

