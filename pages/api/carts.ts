import { removeCartItem } from "@/api";

export default async function handler(req: any, res: any) {
    const id = req.body.id;
    const { data } = await removeCartItem(id);
    console.log(id);
    res.status(200).send(data.name + "가 삭제됨");
}
