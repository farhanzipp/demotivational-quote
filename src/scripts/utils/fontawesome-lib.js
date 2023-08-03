import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faClipboard as faRegularClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import { faClipboard as faSolidClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';

library.add(faRegularBookmark, faRegularClipboard, faSolidBookmark, faSolidClipboard);
dom.watch();
