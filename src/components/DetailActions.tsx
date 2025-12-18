'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Edit, History } from 'lucide-react';
import toast from 'react-hot-toast';

import { useAuth } from '@/contexts/AuthContext';

interface DetailActionsProps {
  id: string;
  type: 'accident' | 'club' | 'student' | 'teacher';
}

const DetailActions = ({ id, type }: DetailActionsProps) => {
  const { user } = useAuth();
  const router = useRouter(); // Need to import useRouter

  const handleEditClick = () => {
    if (!user) {
      toast.error('수정하려면 로그인이 필요합니다.', {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    router.push(`/${type}/${id}/edit`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleEditClick}
        className="flex items-center gap-1 rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        <Edit className="h-4 w-4" /> 수정
      </button>
      <Link
        href={`/${type}/${id}/history`}
        className="flex items-center gap-1 rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        <History className="h-4 w-4" /> 기록
      </Link>
    </div>
  );
};

export default DetailActions;
