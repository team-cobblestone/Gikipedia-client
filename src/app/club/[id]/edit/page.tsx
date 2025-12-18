import EditPage from '@/components/EditPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <EditPage id={id} type="club" />;
};

export default Page;
