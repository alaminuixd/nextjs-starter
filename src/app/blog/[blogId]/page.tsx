type paramsData = {
  params: Promise<{ blogId: string }>;
};

export default async function BlogDetails({ params }: paramsData) {
  const { blogId } = await params;
  console.log(blogId);
  return (
    <div>
      <h1>You are seeing blog {blogId}</h1>
    </div>
  );
}
