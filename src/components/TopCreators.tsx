import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GrowthChart from './charts/GrowthChart';

interface Creator {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  growth: { date: string; value: number }[];
}

interface TopCreatorsProps {
  platform: 'youtube' | 'twitch' | 'instagram';
}

const TopCreators = ({ platform }: TopCreatorsProps) => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    setIsLoading(true);
    const mockCreators: Creator[] = Array.from({ length: 3 }, (_, i) => {
      const baseFollowers = Math.floor(Math.random() * 9000000) + 1000000;
      const growth = Array.from({ length: 30 }, (_, j) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - j));
        return {
          date: date.toISOString().split('T')[0],
          value: baseFollowers + (Math.random() * 500000 * j)
        };
      });

      let names: string[];
      let avatars: string[];
      if (platform === 'instagram') {
        names = ['Kylie Jenner', 'Lisa', 'Jennie'];
        avatars = [
          'https://imgs.search.brave.com/QpXOrJk7DmYqnvlWOhPN85Nzih92fc5o-KqZLZrZUUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/MzcwMDc3NGZkZWUz/LXNuYXBpbnN0YXBw/NDgyNTQzMzk3MTky/MTk3ODAwOTMwNTc4/MTg1NDc0OTU4MTM0/ODEwNTEwOTFuMTA4/MC5qcGc',
          'https://imgs.search.brave.com/dnUWWeyz_w_D98mWChy_A4Whwt1j_9lJwlpRtd8SE_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rcG9w/cGluZy5jb20vZG9j/dW1lbnRzLzIyLzEv/ODAwL0xJU0EtTEFM/SVNBLUNvbmNlcHQt/VGVhc2VyLUltYWdl/cy1kb2N1bWVudHMt/MSgxKS5qcGVnP3Y9/Mzg2NjQ',
          'https://imgs.search.brave.com/3cslYJjVaqUlJ2kAZ1ZDJENvkOeuYFs5Ll-mrUmH8_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzVkL0plbm5pZV9L/aW1fTWFyaWVfQ2xh/aXJlX0tvcmVhXzIw/MjAucG5n'
        ];
      } else if (platform === 'youtube') {
        names = ['Mr Beast', 'T series', 'Cocomelon'];
        avatars = [
          'https://imgs.search.brave.com/pdtUhYkzPsJVpAP7pygFGQbaTtnM2MLXTNhkB1XdWv0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29teXdheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTXJCZWFz/dC15b3V0dWJlLWxv/Z28uanBn',
          'https://yt3.googleusercontent.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s160-c-k-c0x00ffffff-no-rj',
          'https://yt3.googleusercontent.com/ytc/AIdro_lPfVIUJedPeT8Sa0sR1OoH3ehJFJC16RcyvFgvduFPp_k=s160-c-k-c0x00ffffff-no-rj'
        ];
      } else if (platform === 'twitch') {
        names = ['Ninja', 'Kai Cenat', 'Pokimane'];
        avatars = [
          'https://imgs.search.brave.com/cs1ou-ZmlnL4nye1HwI2jbljVXods681I0MIe19k-OY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL2N3/SEpSSUg2LlN2QU96/dmdhcTliUEEtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDRO/ek0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2V2ZW5p/bmdfc3RhbmRhcmRf/MjM5LzE2ZGU4OGI0/YzY1YjJkZTdlYWFk/NDZhMzlmZTlkOGNm',
          'https://imgs.search.brave.com/c14E_zO9jrR7SNJu7Up8wzneguN2Trctd23XZR0buwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzM4/LzcwL2FiMzg3MDY0/N2M5MTM5NTRjMTgz/ZjdmMzkyYTIwOGRi/LmpwZw',
          'https://static-cdn.jtvnw.net/jtv_user_pictures/912232e8-9e53-4fb7-aac4-14aed07869ca-profile_image-300x300.png'
        ];
      } else {
        names = ['Creator1', 'Creator2', 'Creator3'];
        avatars = [
          `https://i.pravatar.cc/150?img=${i + 1}`,
          `https://i.pravatar.cc/150?img=${i + 2}`,
          `https://i.pravatar.cc/150?img=${i + 3}`
        ];
      }

      return {
        id: `creator-${i + 1}`,
        name: names[i] || `Channel ${i + 1}`,
        avatar: avatars[i] || `https://i.pravatar.cc/150?img=${i + 1}`,
        followers: baseFollowers,
        growth
      };
    });

    setTimeout(() => {
      setCreators(mockCreators);
      setIsLoading(false);
    }, 1000);
  }, [platform]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getChartColor = () => {
    switch (platform) {
      case 'youtube': return '#EF4444';
      case 'twitch': return '#9333EA';
      case 'instagram': return '#EC4899';
      default: return '#3B82F6';
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-800 p-6 rounded-lg">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {creators.map((creator) => (
        <div key={creator.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center mb-4">
            <img 
              src={creator.avatar} 
              alt={creator.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <Link 
                to={`/${platform}/user/${creator.id}`}
                className="text-lg font-semibold text-gray-900 dark:text-white hover:underline"
              >
                {creator.name}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatNumber(creator.followers)} followers
              </p>
            </div>
          </div>
          <GrowthChart data={creator.growth} color={getChartColor()} />
        </div>
      ))}
    </div>
  );
};

export default TopCreators;