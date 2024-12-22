import { fetchCarts } from "@/api";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";

const CartPage = ({ carts }: any) => {
    console.log(carts);
    return (
        <div>
            <CartHeader />
            <CartList carts={carts} />
        </div>
    );
};

export async function getServerSideProps() {
    const { data } = await fetchCarts();

    return {
        props: {
            carts: data,
        },
    };
}

export default CartPage;
