export const fetchLineItems = async (sessionId: string) => {
  console.log("sessionId: ", sessionId);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${sessionId}`
  );

  if (!res.ok) return;

  const data = await res.json();
  const products = data.session.data;
  console.log("products: ", products);
  return products;
};
