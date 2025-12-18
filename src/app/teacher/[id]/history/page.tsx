import HistoryPage from '@/components/HistoryPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <HistoryPage id={id} type="teacher" />;
};

export default Page;
