import { Tag } from '@finastra/angular-components/filter/filter-tags';
import { ToggleBtn } from '@finastra/angular-components/filter/filter-toggle';
import { TreeNode } from '@finastra/angular-components/filter/filter-tree';

export const sampleFilterTree: TreeNode[] = [
  {
    label: 'Consumer Banking',
    children: [
      {
        label: 'Alerts'
      },
      {
        label: 'Customer Management'
      },
      {
        label: 'Money Movement'
      }
    ]
  },
  {
    label: 'Corporate Banking',
    children: [
      {
        label: 'Account Information'
      },
      {
        label: 'Back Office'
      },
      {
        label: 'Payments'
      }
    ]
  },
  {
    label: 'Financial Toolbox'
  },
  {
    label: 'Lending',
    children: [
      {
        label: 'Data Management'
      },
      {
        label: 'Integration'
      },
      {
        label: 'Lending Tools'
      }
    ]
  },
  {
    label: 'Payment',
    children: [
      {
        label: 'Fees & Billings'
      },
      {
        label: 'Payment Initiation'
      },
      {
        label: 'Payment Request'
      }
    ]
  }
];

export const sampleFilterTags: Tag[] = [
  {
    label: 'Malauzai',
    isSelected: true
  },
  {
    label: 'North America'
  },
  {
    label: 'Money Movement'
  },
  {
    label: 'Static Data'
  }
];

export const sampleGroupTags = [
  { category: 'A', label: 'Alabama' },
  { category: 'A', label: 'Alaska', isSelected: true },
  { category: 'A', label: 'Arizona' },
  { category: 'A', label: 'Arkansas' },
  { category: 'C', label: 'California' },
  { category: 'C', label: 'Colorado' }
];

export const sampleToggleBtn: ToggleBtn[] = [
  {
    label: 'API',
    value: 'api',
    matIcon: 'public'
  },
  {
    label: 'Solution',
    value: 'solution',
    matIcon: 'widgets'
  },
  {
    label: 'Dataset',
    value: 'dataset',
    isSelected: true,
    matIcon: 'dns'
  }
];

export const sampleTimeline: ToggleBtn[] = [
  {
    label: '7 Days',
    value: '7days',
    isSelected: true
  },
  {
    label: '14 Days',
    value: '14days'
  },
  {
    label: '1 Month',
    value: '1month'
  },
  {
    label: '3 Months',
    value: '3months'
  },
  {
    label: '6 Months',
    value: '6months'
  },
  {
    label: '1 Year',
    value: '1year'
  }
];
