const handleGetImage = (image: String | undefined) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${image}`;
};

export default handleGetImage;
