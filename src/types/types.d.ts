type Task = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

type TaskCardProps = {
  task: Task;
  onComplete: (id: number) => void;
};

type HeaderProps = {
  title: string;
};
