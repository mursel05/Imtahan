import { Skeleton } from "@mantine/core";

const ExamCardLoading = () => {
  return (
    <div className="group relative bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4 justify-between h-full">
      <div className="flex flex-col gap-4">
        <Skeleton height={170} />
        <div className="flex flex-col gap-2">
          <Skeleton height={25} width="70%" radius="xl" />
          <Skeleton height={25} radius="xl" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    </div>
  );
};

export default ExamCardLoading;
