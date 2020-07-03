/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  researchers: {
    id: `${scope}.researchers`,
    defaultMessage: 'About',
  },
  details: {
    id: `${scope}.details`,
    defaultMessage:
      '<p>Housed in the School of Creative Industries and Innovation Hub’s Honeysuckle building FASTLab carries out research and development at the intersection of Art, Science and Technology.</p><p>FASTLab is a Gateway to the University of Newcastle’s internationally recognised research centres, the expertise of staff, students and graduates, and the outstanding facilities the University has to offer.</p><p>Across its themes of Human Behaviour, Future Work, Transmedia Arts, Narrative possibilities and Connected Communities the FASTLab team thinks - among other things - about Innovation and enterprise; Technology (AI & Robotics); globalization; migration; aging; (in-work) poverty and inequality; macro-economic instability. FASTLab’s transdisciplinary team pursues a broad range of projects, from exhibitions and installations, performances and prototypes, to cooperation with the private sector, NGO’s and universities.',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'BACK',
  },
});
