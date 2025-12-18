import RevisionDetailPage from '@/components/RevisionDetailPage';

interface PageProps {
  params: Promise<{ id: string; revId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id, revId } = await params;
  return <RevisionDetailPage id={id} revId={revId} type="student" />;
};

export default Page;
