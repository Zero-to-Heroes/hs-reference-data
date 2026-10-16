export enum CustomTags {
	REMOVED_FROM_BACON_POOL,
	TARGETS_MINION,
	TARGETS_FRIENDLY_MINION,
	TARGETS_FRIENDLY_CHARACTER,
	TARGETS_ENEMY,
	/** Charge-style minions that can target heroes but never deal hero damage (e.g. The Living Plague). */
	NEVER_DEALS_HERO_DAMAGE,
	/** Spell can be cast on any minion or either player. */
	TARGETS_CHARACTER,
	/** Battlegrounds card whose text discards a card or reacts to cards being discarded. */
	CARES_ABOUT_DISCARDS_THIS_GAME,
}
