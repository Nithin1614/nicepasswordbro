const passwordInput = document.getElementById("passwordInput");
const sarcasmOutput = document.getElementById("sarcasmOutput");
const introMessage = document.getElementById("intro-message");
const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strengthMeterBar");

// Enhanced Sarcasm Messages
const weakSarcasm = [
  "Seriously? My pet goldfish could crack this.",
  "This password is weaker than my WiFi signal.",
  "I've seen stronger passwords on sticky notes.",
  "Even a toddler could guess this one.",
  "This is basically an open invitation to hackers.",
  "Your password has the strength of wet paper.",
  "I'm not angry, just profoundly disappointed.",
  "Did you just smash your keyboard with your eyes closed?",
  "This password wouldn't stop a determined squirrel.",
  "You're one step away from using 'password123'.",
  "May the cybersecurity gods have mercy on your soul.",
  "This makes '123456' look sophisticated.",
  "I hope this isn't for anything important... like breathing.",
  "Are you actively trying to get hacked?",
  "This password has less security than a cardboard lock.",
  "Your password security is basically non-existent.",
  "I've seen more complexity in a children's coloring book.",
  "This password is so weak, it's practically transparent.",
  "You might as well just leave your account unlocked.",
  "This wouldn't fool a sleepy intern, let alone a hacker.",
  "Your password game is weaker than my morning coffee.",
  "This password has the structural integrity of a house of cards.",
  "I've seen more security on a public bathroom stall.",
  "This password is the digital equivalent of leaving your door wide open.",
  "You've created a password that hackers would use as a warm-up exercise.",
  "This is what happens when you let autocorrect create your password.",
  "Your password is so predictable, it should come with a fortune cookie.",
  "I'm pretty sure this password came free with your computer.",
  "This password is giving me secondhand embarrassment.",
  "You've somehow made 'password' look like a masterpiece.",
  "This password is weaker than a politician's promise.",
  "I've seen stronger security on a cereal box.",
  "Your password is basically a welcome mat for cybercriminals.",
  "This password screams 'please hack me' louder than a megaphone.",
  "You've created the password equivalent of a glass house.",
  "This password is so bad, it's actually impressive in its terribleness.",
  "Original. Truly groundbreaking.",
  "Do you sleepwalk through password creation too?",
  "Hackers love you too.",
  "Wow, how refreshingly predictable.",
  "This password has all the creativity of a brick wall.",
  "I'm impressed by your dedication to mediocrity."
];

const averageSarcasm = [
  "Getting warmer, but still not exactly Fort Knox.",
  "You're in the 'meh' zone of password security.",
  "It's like wearing a raincoat in a hurricane - better than nothing.",
  "This might slow down a lazy hacker for about 3 seconds.",
  "You're halfway to not being completely embarrassed.",
  "It's adequate, like a participation trophy.",
  "This password is the equivalent of a screen door on a submarine.",
  "You're trying, and that's... something, I guess.",
  "It's not terrible, but it's not winning any awards either.",
  "Your password has trust issues - it's not quite there yet.",
  "This is like bringing a water gun to a cyber war.",
  "You're in password purgatory - not great, not awful.",
  "It's giving 'decent effort' vibes.",
  "This password is like a lukewarm cup of coffee - functional but uninspiring.",
  "You're swimming in the shallow end of the security pool.",
  "This password is the digital equivalent of a speed bump.",
  "You're playing password limbo - how low can you go?",
  "This is what mediocrity looks like in password form.",
  "Your password is having an identity crisis - weak or strong?",
  "It's like a security guard who's half asleep on the job.",
  "This password is stuck in the friend zone of cybersecurity.",
  "You're riding the fence between disaster and decency.",
  "This password needs a pep talk and some vitamins.",
  "It's giving 'I tried but not that hard' energy.",
  "Your password is the beige of the security world.",
  "This is password vanilla - safe, boring, forgettable.",
  "You're in the Goldilocks zone of passwords - not too weak, not too strong.",
  "This password is like a diet soda - almost good, but not quite.",
  "Your security game is playing it safe... maybe too safe.",
  "This password is the equivalent of wearing socks with sandals."
];

const strongSarcasm = [
  "Finally! A password that doesn't make me weep.",
  "Now we're talking! This could actually stop someone.",
  "Look at you, being all responsible with your security.",
  "This password means business - I'm almost impressed.",
  "You've graduated from 'completely hopeless' to 'actually decent'.",
  "This might actually give hackers a mild headache.",
  "Bravo! You've discovered the art of not being terrible.",
  "This password has some real backbone to it.",
  "I feel like I can sleep peacefully knowing this exists.",
  "You've achieved password respectability - congratulations!",
  "This is what I call 'hacker-resistant' material.",
  "Finally, a password worthy of the name 'password'.",
  "You've leveled up from 'password peasant' to 'security citizen'.",
  "This password actually looks like it went to password boot camp.",
  "I can hear hackers sighing in frustration already.",
  "You've built a decent digital fortress here.",
  "This password has some actual muscle behind it.",
  "Now THIS is what I call putting in the effort!",
  "You've moved from the kiddie pool to the deep end of security.",
  "This password could probably bench press a small hacker.",
  "I'm getting strong 'I actually care about security' vibes.",
  "You've crafted something that won't make IT professionals cry.",
  "This password has graduated from password university with honors.",
  "Finally, a password that takes itself seriously.",
  "You've achieved the rare feat of not being a security liability.",
  "This is the password equivalent of a sturdy deadbolt.",
  "I'm genuinely impressed - you've created something worthwhile.",
  "This password could probably intimidate a script kiddie.",
  "You've reached the promised land of password competence."
];

const excellentSarcasm = [
  "Holy encryption, Batman! This is actually impressive.",
  "This password could probably stop a small army of hackers.",
  "You've reached password enlightenment - I'm genuinely proud.",
  "This is fortress-level security - well done!",
  "Even I'm a little intimidated by this password.",
  "This password has more layers than a security onion.",
  "You've officially made my day with this masterpiece.",
  "This is the password equivalent of a Swiss bank vault.",
  "I bow down to your superior password craftsmanship.",
  "This password is so strong, it probably lifts weights.",
  "You've transcended mere mortal password creation.",
  "This is what password perfection looks like!",
  "I'm not worthy of this password's presence.",
  "This password could probably get its own security clearance.",
  "You've created the Mona Lisa of password security.",
  "This password is so secure, it makes me feel safe just looking at it.",
  "I think I just witnessed password poetry in motion.",
  "This is the password that other passwords aspire to be.",
  "You've achieved password nirvana - congratulations!",
  "This password is tougher than a two-dollar steak.",
  "I'm genuinely emotional about how beautiful this password is.",
  "This password could probably run for president on a security platform.",
  "You've created something that would make encryption experts weep with joy.",
  "This is the password equivalent of a digital fortress with laser sharks.",
  "I'm pretty sure this password just intimidated my computer.",
  "This password is so strong, it probably has its own gravitational pull.",
  "You've achieved the impossible - a password that's both complex and elegant.",
  "This is what happens when someone actually reads the security guidelines.",
  "I'm nominating this password for the Cybersecurity Hall of Fame.",
  "This password is so secure, hackers are probably switching careers.",
  "You've created a password that would make a cryptographer cry happy tears.",
  "This is the password equivalent of a digital superhero.",
  "I'm convinced this password could probably solve world peace.",
  "You've reached the Mount Everest of password security.",
  "This password is so good, it deserves its own theme song."
];

// Highlight a random word in sarcasm
function highlightRandomWord(text) {
  const words = text.split(" ");
  const index = Math.floor(Math.random() * words.length);
  words[index] = `<span class="highlight-word">${words[index]}</span>`;
  return words.join(" ");
}

// Fixed and enhanced password strength calculation
function calculatePasswordStrength(password) {
  let score = 0;
  let checks = {
    length: false,
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
    noCommon: false,
    noSequential: false,
    noRepeated: false
  };

  // Enhanced length scoring with proper progression
  const length = password.length;
  if (length >= 8) {
    score += 15;
    checks.length = true;
  }
  if (length >= 12) score += 15;
  if (length >= 16) score += 10;
  if (length >= 20) score += 10;
  
  // Penalty for very short passwords
  if (length < 6) score -= 20;
  if (length < 4) score -= 20;

  // Character variety with proper weighting
  if (/[a-z]/.test(password)) {
    score += 10;
    checks.lowercase = true;
  }
  if (/[A-Z]/.test(password)) {
    score += 10;
    checks.uppercase = true;
  }
  if (/[0-9]/.test(password)) {
    score += 10;
    checks.numbers = true;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    score += 15;
    checks.symbols = true;
  }

  // Count character variety for bonus
  const varietyCount = [
    checks.lowercase,
    checks.uppercase,
    checks.numbers,
    checks.symbols
  ].filter(Boolean).length;

  // Bonus for character variety
  if (varietyCount >= 3) score += 10;
  if (varietyCount === 4) score += 15;

  // Enhanced common pattern detection
  const commonPatterns = [
    /password/i, /123456/, /qwerty/i, /admin/i, /login/i,
    /welcome/i, /monkey/i, /letmein/i, /dragon/i, /master/i,
    /111111/, /000000/, /iloveyou/i, /princess/i, /rockyou/i,
    /12345678/, /abc123/i, /password1/i, /password123/i
  ];
  
  const hasCommonPattern = commonPatterns.some(pattern => pattern.test(password));
  if (!hasCommonPattern) {
    score += 10;
    checks.noCommon = true;
  } else {
    score -= 15; // Penalty for common patterns
  }

  // Enhanced sequential character detection
  const sequentialPatterns = [
    /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i,
    /(?:012|123|234|345|456|567|678|789|890)/,
    /(?:qwe|wer|ert|rty|tyu|yui|uio|iop|asd|sdf|dfg|fgh|ghj|hjk|jkl|zxc|xcv|cvb|vbn|bnm)/i
  ];
  
  const hasSequential = sequentialPatterns.some(pattern => pattern.test(password));
  if (!hasSequential) {
    score += 8;
    checks.noSequential = true;
  } else {
    score -= 10; // Penalty for sequential patterns
  }

  // Enhanced repeated character detection
  const hasRepeated = /(.)\1{2,}/.test(password);
  if (!hasRepeated) {
    score += 8;
    checks.noRepeated = true;
  } else {
    score -= 10; // Penalty for repeated characters
  }

  // Check for dictionary words (simple check)
  const simpleWords = ['password', 'welcome', 'admin', 'login', 'user', 'test', 'guest', 'root'];
  const hasSimpleWord = simpleWords.some(word => 
    password.toLowerCase().includes(word.toLowerCase())
  );
  if (hasSimpleWord) {
    score -= 15;
  }

  // Bonus for complexity combinations
  if (checks.lowercase && checks.uppercase && checks.numbers && checks.symbols) {
    score += 20;
  }

  // Bonus for length + complexity
  if (length >= 12 && varietyCount >= 3) {
    score += 15;
  }

  // Ensure score is within bounds
  score = Math.max(0, Math.min(score, 100));

  return { score, checks };
}

// Fixed password strength categories with proper thresholds
function getPasswordCategory(score) {
  if (score >= 80) return 'excellent';
  if (score >= 60) return 'strong';
  if (score >= 35) return 'average';
  return 'weak';
}

// Update strength meter with enhanced visuals
function updateStrengthBar(password) {
  const { score } = calculatePasswordStrength(password);
  
  strengthBar.style.width = `${score}%`;
  
  // Enhanced color progression
  if (score < 35) {
    strengthBar.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
  } else if (score < 60) {
    strengthBar.style.background = 'linear-gradient(to right, #f97316, #ea580c)';
  } else if (score < 80) {
    strengthBar.style.background = 'linear-gradient(to right, #eab308, #ca8a04)';
  } else {
    strengthBar.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
  }
}

// Get sarcasm based on enhanced strength calculation
function getSarcasticMessage(password) {
  const { score } = calculatePasswordStrength(password);
  const category = getPasswordCategory(score);
  
  let messageArray;
  switch (category) {
    case 'excellent':
      messageArray = excellentSarcasm;
      break;
    case 'strong':
      messageArray = strongSarcasm;
      break;
    case 'average':
      messageArray = averageSarcasm;
      break;
    default:
      messageArray = weakSarcasm;
  }
  
  return getRandomMessage(messageArray);
}

function getRandomMessage(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Event listener for password input
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value.trim();

  if (value.length > 0) {
    introMessage.classList.add("hidden");
  } else {
    introMessage.classList.remove("hidden");
    sarcasmOutput.innerHTML = "";
    strengthBar.style.width = "0%";
    return;
  }

  const message = getSarcasticMessage(value);
  const { score } = calculatePasswordStrength(value);

  // VIBRATE on weak passwords (enhanced threshold)
  if (score < 35 && navigator.vibrate) {
    navigator.vibrate(120);
  }

  sarcasmOutput.classList.remove("fade-in");
  void sarcasmOutput.offsetWidth;
  sarcasmOutput.classList.add("fade-in");
  sarcasmOutput.innerHTML = highlightRandomWord(message);

  updateStrengthBar(value);
});

// Toggle show/hide password
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});
