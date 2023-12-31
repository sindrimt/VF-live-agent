import { LiveAgentPlatform } from '../../../../shared/live-agent-platform.enum';
import { Trace } from './types';

export const TalkToAgentTrace = (handoff: (platform: LiveAgentPlatform) => void): Trace => ({
  canHandle: ({ type }) => type === 'talk_to_agent',
  handle: ({ context }, trace) => {
    console.log(JSON.parse(trace.payload));
    handoff(JSON.parse(trace.payload).platform);
    return context;
  },
});
