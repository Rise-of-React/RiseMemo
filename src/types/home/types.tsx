export type HomeCardObject = {
  Todo: string;
  Progress: string;
  Complete: string;
  Total: string;
};

export const defaultHomeCardObject: HomeCardObject = {
  Todo: '30',
  Progress: '40',
  Complete: '20',
  Total: '90',
};
